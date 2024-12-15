import React,{useState} from 'react';

const LoginForm=()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Login successfull for: ${email}`);
    };

return(
    <div style={styles.container}>
        <h2 style={styles.heading}>Sign in To your Account</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
            <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            style={styles.input}
            />

<input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            style={styles.input}
            />
            <button type="submit" style={styles.button}>Sign In</button>
        </form>
    </div>
);


};


const styles={
    container:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItem:"center",
        height:"100vh",
        backgroundColor:"#f0f0f0",
        width:"600px",
    },

    heading:{
        color:"#333",
        marginBottom:"20px"

    },

    form:{
        display:"flex",
        flexDirection:"column",
        width:"300px",
        padding:"20px",
        backgroundColor:"#fff",
        borderRadius:"8px",
        boxShadow:"0 4px 8px rgba(0,0,0,0.1)",
    },
    input: {
        marginBottom: "15px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ddd",
        fontSize: "16px",
      },
      button: {
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: "#007bff",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
      },
};

export default LoginForm;
