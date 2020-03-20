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
}){
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
export function areaAdd({
  name,
  cultureType,
  soilType,
  cycleDays,
  sowingDate,
  boundary,
  square,
  center,
  size,
  imageFile,
  _customerId
}) {

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

  const dateSplit = sowingDate.split('/')
  const dateToISO = new Date(`${dateSplit[1]}/${dateSplit[0]}/${dateSplit[2]}`).toISOString();
  
  return `
    mutation{
      areaAdd(
        name: "${name}",
        cultureType: ${cultureType},
        soilType: ${soilType} ,
        cycleDays: "${cycleDays}",
        sowingDate:"${dateToISO}",
        boundary:${toGraphQL(boundary)},
        square:${toGraphQL(square)},
        center:${toGraphQL(center)},
        size:"${size}"
        imageFile:"${imageFile}"
        _customerId: ${_customerId}
      ){
        _id,
        name
        imageFile
        soilType
        sowingDate
        cultureType
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