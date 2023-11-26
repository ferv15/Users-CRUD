
import './styles/UserCard.css'

const UserCard = ({user, deleteUser, setInfoUpdate, setIsDisable}) => {

    const handleDelete = () => {
        deleteUser('/user/', user.id)
    }

    const handleEdit = () => {
        setInfoUpdate(user)
        setIsDisable(false)
    }
    return (
        <article className='form_card'>
            <h3 className='form_name'>{user.first_name} {user.last_name}</h3>
            <ul>
                <li className='form_items'><span className='form_item'>Email:</span><span>{user.email}</span></li>
                <li className='form_items'><span className='form_item'>Birthday:</span><span><i className='bx bx-gift' ></i> {user.birthday}</span></li>
            </ul>
            <div className='form_buttom'>
                <button className='form_btn_delete' onClick = {handleDelete}><i className='bx bxs-trash' ></i></button>
                <button className='form_btn_edit' onClick = {handleEdit}><i className='bx bxs-edit-alt' ></i></button>
            </div>
        </article>
    )
}

export default UserCard