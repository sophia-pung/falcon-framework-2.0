import "./signup.css"

function Signup () {
    return (
<div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required="" ></input>
      <label>Password</label>
    </div>
    <button href="#" className="btn">
      Submit
    </button>
  </form>
</div>
    )
}

export default Signup;