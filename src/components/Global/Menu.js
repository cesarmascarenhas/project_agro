import React from 'react';
import { connect } from 'react-redux';
import { AiOutlineUser, AiOutlineLogout, AiOutlineGateway } from 'react-icons/ai';
import { useLocation } from 'react-router-dom'


const iconStyle = { width: 20, height: 20, marginRight: 10 };

export function Menu({ customer, dispatch }) {

    const { pathname } = useLocation();

    function logout(){
        dispatch({
            type: 'USER_LOGOUT'
        })
    }

    return (
        <div className="app-menu">
            <div>{customer && customer.name}</div>
            <ul>
                <li className={pathname === '/profile' ? 'selected' : ''}><div style={iconStyle}><AiOutlineUser size={20} /></div> Perfil</li>
                <li className={pathname === '/main' ? 'selected' : ''}><div style={iconStyle}><AiOutlineGateway size={20} /></div> Áreas</li>
                <li onClick={logout}><div style={iconStyle}><AiOutlineLogout size={20} /></div> Sair</li>
            </ul>
        </div>
    )
}

function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps)(Menu)