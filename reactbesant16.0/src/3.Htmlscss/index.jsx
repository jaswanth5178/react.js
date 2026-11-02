import './index.scss'

function index(){
    return(
        <div className='htmlscss'>
            <form>
                <h1>Register Here</h1>
                <input type="text" placeholder='Enter your name' />
                <input type="email" placeholder='Enter your email' />
                <input type="password" placeholder='Enter your password' />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}
export default index;