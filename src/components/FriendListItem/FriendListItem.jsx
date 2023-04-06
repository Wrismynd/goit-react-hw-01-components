import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return <li className="item">
    <span className={isOnline ? styles.isOnline : styles.isOffline}>{isOnline}</span>
    <img className="avatar" src={avatar} alt={name} width="48" />
    <p className="name">{name}</p>
    </li>
}