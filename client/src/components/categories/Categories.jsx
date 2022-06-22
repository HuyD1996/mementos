const [categories, setCats] = useState([""]);

const newPost = {
  username: user.username,
  title,
  desc,
  categories,
};

<input
  type="text"
  placeholder=""
  className="writeInput writeCats"
  value={categories[0]}
  onChange={(e) => setCats((state) => [e.target.value])}
></input>;
