import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Mementos</span>
        <span className="headerTitleSm"></span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.cnn.com/cnnnext/dam/assets/210712231918-underscored-unidentified-commercial-airplane-flying-in-sky-during-sunset.jpg"
        alt=""
      />
    </div>
  );
}
