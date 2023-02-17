import classes from "./style.module.scss";

function Avatar() {
  return (
    <div className={classes.avatar}>
      <img src="/images/image-avatar.png" alt="" />
    </div>
  );
}

export default Avatar;
