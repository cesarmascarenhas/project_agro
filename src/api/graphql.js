// FRAGMENTS ==============================================================
const dataFragment = `
    label
    value
`
const weatherFragment = `
    label
    maxTemp
    minTemp
    type
`
const coordinateFragment = `
    latitude
    longitude
`
// QUERY ===================================================================

/*----------------------------- CUSTOMER --------------------------------- */
// LOGIN -------------------------------------------------------------------
export function customerLogin({
	username,
	password
}) {
	return `
        query{
            customerLogin(username: "${username}", password: "${password}"){
                _id
                name
                email
            }
        }
    `
}
// CUSTOMER DATA -------------------------------
export function customer({
	id
}) {
	return `
  query {
      customer(id: ${id}) {
        area {
          _id
          name
          imageFile
          soilType
          sowingDate
          cultureType
          spacing
          population
          tetaCC
          tetaPMP
          soilHumidity
          soilDepth
          irrigationSystem
          leaf
          percentimeter
          efficiency
          irrigationType
          variety
          bh {
            rootDepth
            kc
            etc
            p
            AFD
            AFDf
            AFDi
            effectiveRain
            irrigation
            complementarWater
            sowingdays
            range
            altitude
            _createdAt
          }
          nearStation {
            label
            altitude
            data {
              precipitation
              windVelocity
              tempNow
              humidity
              _date
            }
          }
          weather {
            day {
              ${weatherFragment}
            }
            week {
              ${weatherFragment}
            }
            temperature {
              ${dataFragment}
            }
            humidity {
              ${dataFragment}
            }
            precipitation {
              ${dataFragment}
            }
          }
          notification {
            message
          }
          boundary {
            data {
              ${coordinateFragment}
            }
            square {
              ${coordinateFragment}
            }
            center {
              ${coordinateFragment}
            }
          }
          size
          cycleDays
        }
      }
  }`
}

// MUTATION ==========================================================================

/*------------------------------------ CUSTOMER ----------------------------------- */
// REGISTER --------------------------------------------------------------------------
export function customerAdd({
	name,
	password,
	email,
	facebook,
	hardwareUID,
}) {
	return `
        mutation {
            customerAdd(
                name:"${name}",
                password:"${password}",
                email:"${email}",
                facebook: ${facebook},
                hardwareUID: "${hardwareUID}"
            ){
                _id
                name
                email
            }
        }`
}

/*------------------------------------ AREA ----------------------------------- */
// ADD AREA ---------------------------------------------------------------------
export function areaAdd({ ...area }) {

	function toGraphQL(object) {
		let qql = '';
		if (Array.isArray(object)) {
			qql += '['
			object.forEach(item => {
				qql += "{"
				for (let key in item) {
					qql += `${key}: "${item[key]}", `
				}
				qql += "},"
			})
			qql += ']'
		} else {
			qql += "{"
			for (let key in object) {
				qql += `${key}: "${object[key]}", `
			}
			qql += "}"
		}
		return qql;
	}

	function getMutationFields(field) {
		let qql = '';
		for (let key in field) {
			if (key === 'boundary' || key === 'square' || key === 'center') {
				qql += `${key}: ${toGraphQL(field[key])} \n`;
			} else if (key === 'sowingDate') {
				const dateSplit = field[key].split('/')
				const dateToISO = new Date(`${dateSplit[1]}/${dateSplit[0]}/${dateSplit[2]}`).toISOString();
				qql += `${key}: "${dateToISO}" \n`;
			} else if (key === 'cultureType' || key === 'soilType' || key === 'irrigationSystem') {
				qql += `${key}: ${field[key]} \n`;
			} else {
				qql += `${key}: "${field[key]}" \n`;
			}
		}
		return qql;
	}

	return `
    mutation{
      areaAdd(
        ${getMutationFields(area)}
      ){
        _id
        name
        imageFile
        soilType
        sowingDate
        cultureType
        tetaCC
        tetaPMP
        soilHumidity
        soilDepth
        irrigationSystem
        leaf
        percentimeter
        efficiency
        irrigationType
        weather {
          day {
            ${weatherFragment}
          }
          week {
            ${weatherFragment}
          }
          temperature {
            ${dataFragment}
          }
          humidity {
            ${dataFragment}
          }
          precipitation {
            ${dataFragment}
          }
        }
        notification {
          message
        }
        boundary {
          data {
            ${coordinateFragment}
          }
          square {
            ${coordinateFragment}
          }
          center {
            ${coordinateFragment}
          }
        }
        size
      }
    }
  `
}