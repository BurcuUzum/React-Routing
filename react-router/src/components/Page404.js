import { Link } from "react-router-dom";

function Page404() {
  return (
    <div style={{ textAling: "center" }}>
      <h1>Sayfa Bulunamadı...</h1>
      <Link to="/">Anasayfaya Dön</Link>
    </div>

  )
}

export default Page404
