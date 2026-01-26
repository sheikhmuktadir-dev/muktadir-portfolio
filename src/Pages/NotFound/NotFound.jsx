import Style from "./notfound.module.css";

export default function NotFound() {
  return (
    <div className={Style.notFound}>
      <h1>404</h1>
      <h6>Page Not Found</h6>
    </div>
  );
}
