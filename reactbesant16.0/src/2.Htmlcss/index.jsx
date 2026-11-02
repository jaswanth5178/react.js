import './index.css'

function index(){
    return(
        <div className='htmlcss'>
            <form>
                <h1>Register Here</h1>
                <input type="text" placeholder='Enter your name' />
                <input type="email" placeholder='Enter your email' />
                <input type="password" placeholder='Enter your password' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default index;