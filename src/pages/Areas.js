import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as ACTIONS from '../actions';
import AreaCard from '../components/Areas/AreaCard';
import AreaFull from '../components/Areas/AreaFull';
import { Redirect } from 'react-router-dom';
import Menu from '../components/Global/Menu';
import { AiOutlineLoading } from "react-icons/ai";


export function Areas({ customer, areas, server, dispatch }) {

    const [selectedArea, setSelectedArea] = useState(null);

    function openArea(_id) {
        setSelectedArea(
            areas.data.find(area => area._id === _id)
        )
    }

    useEffect(() => {
        customer && dispatch(ACTIONS.areas({ id: customer._id }))
    }, [customer, dispatch])

    return (
        <div style={{ paddingTop: 60 }}>
            <Menu />
            {
                server.msg === 'areas-request' && (
                    <div className="login-loading">
                        <div className="spin">
                            <AiOutlineLoading color="#bae82d" size="3em" />
                        </div>
                    </div>
                )
            }
            <div className={`areas transition ${selectedArea ? 'out' : ''}`}>
                {
                    customer === null && <Redirect to="/" />
                }
                {
                    areas.data.map(
                        (area, index) => {
                            return <AreaCard key={`area-${index}`} {...{ area, openArea }} />
                        }
                    )
                }

            </div>
            {
                selectedArea && (
                    <AreaFull data={selectedArea} openArea={openArea} />
                )
            }
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Areas);
