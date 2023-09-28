import React ,{useState,useEffect} from "react"
import { Navbar } from "./Navbar"
import {auth,db} from '../FIrebase/firebaseConfig'
import { query ,getDocs,where,collection } from "firebase/firestore";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';

export const ProfilePage = () => {
    function GetCurrentUser(){
        const [user, setuser] = useState("");
        const userCollection = collection(db,'users');
        useEffect(() => {
          auth.onAuthStateChanged(userlogged=>{
            if(userlogged){
              const getUsers = async()=>{
                const q = query(collection(db,"users"),where("uid","==",userlogged.uid));
    
                const data = await getDocs(q)
                setuser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
              }
              getUsers();
            }
            else{
              setuser(null);
            }
          })
        }, [])
        return user;
      }
    
      const loggedUser = GetCurrentUser(); 
        return (
        <>
        <Navbar/>
    <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        {loggedUser &&
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">{loggedUser[0].username }</p>
                <p className="text-muted mb-4">{loggedUser[0].phoneno}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Customer Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{loggedUser[0].username}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{loggedUser[0].email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Mobile</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{loggedUser[0].phoneno}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{loggedUser[0].address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>}
      </MDBContainer>
    </section>
        </>
        
    )
}
