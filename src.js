





class App extends Component {  constructor(props){
   super(props);
   this.state ={
     message:"new message from App js",
     song:"we love what we do"
   }
 }
 updateState(){
     this.setState(
       {
       message:"New update title",
       song:"New message from sarah and mary"
     }
     );
 }
