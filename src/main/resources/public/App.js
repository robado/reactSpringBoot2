import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.deleteStudent = this.deleteStudent.bind(this);
        this.createStudent = this.createStudent.bind(this);

        this.state = {
            students: []
        };
    }

    componentDidMount() {
        this.loadStudentsFromServer();
    }

    // Load students from database
    loadStudentsFromServer() {
        fetch('http://localhost:8080/api/students', {
            credentials: 'same-origin'
        }).then((response) => response.json()).then((responseData) => {
            this.setState({students: responseData._embedded.students});
    });
    }

    // Delete student
    deleteStudent(student) {
        // DELETE Fetch call to delete student
    }

    // Create new student
    createStudent(student) {
        // POST Fetch call to add student
    }

    render() {
        return (
            <div>
                <StudentForm
                    createStudent={this.createStudent}/>
                <StudentTable
                    deleteStudent={this.deleteStudent}
                    students={this.state.students}/>
            </div>
        );
    }
}

class StudentTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div></div>
        );
    }
}

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        this.props.deleteStudent(this.props.student);
    }

    render() {
    }
}

class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {firstname: '', lastname: '', email: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // Set states here
    }

    handleSubmit(event) {
        // Create new srudent object and call createStudent
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Create student</div>
                <div className="panel-body">
                <form className="form-inline">
                    <div className="col-md-2">
                        <input type="text" placeholder="Firstname" className="form-control"  name="firstname" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <input type="text" placeholder="Lastname" className="form-control" name="lastname" onChange={this.handleChange}/>
                    </div>
                        <div className="col-md-2">
                    <input type="text" placeholder="Email" className="form-control" name="email" onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-success" onClick={this.handleSubmit}>Save</button>
                    </div>
                </form>
                </div>
            </div>
        );
    }

}

ReactDOM.render(<App/>, document.getElementById('root'));
