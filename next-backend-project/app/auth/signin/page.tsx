export default function SigninPage () {
 return (
    <div>
        <h1>Sign In Page</h1>
        <form>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
            </div>
            <button type="submit">Sign In</button>
        </form>
    </div>
 )
}