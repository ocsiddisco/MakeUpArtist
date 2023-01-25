import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('Thank you ' + this.state.name + ' for testing this form.');
        event.preventDefault(); //prevent page refresh//
        event.target.reset();
    }

    render() {
        return (
            <div>
                <hr />
            <div className="mt-8">
                <div className='flex flex-col m-6 font-face-gm text-amber-900'>
                    <div className='flex justify-center text-xl p-8 text-center'>
                        <p>Feel free to reach out for any questions!</p>
                    </div>
                    <div className='flex justify-center background'>
                        <form id="form" onSubmit={this.handleSubmit} className='w-3/5 border-solid rounded-lg mt-5 p-5'>
                            <div className="flex flex-row m-2 flex-wrap">
                                <div className='w-1/5'>
                                    <label>Name</label>
                                </div>
                                <div className='w-4/5'>
                                    <input name='name' type='text' onChange={this.handleInputChange} className=' w-4/5 rounded bg-orange-100 outline-none p-1' />
                                </div>
                            </div>
                            <div className="flex flex-row m-2 flex-wrap">
                                <div className='w-1/5'>
                                    <label>Email</label>
                                </div>
                                <div className='w-4/5'>
                                    <input name='email' type='text'  onChange={this.handleInputChange} className=' w-4/5 rounded bg-orange-100 outline-none p-1' />
                                </div>
                            </div>
                            <div className="flex flex-row m-2 flex-wrap">
                                <div className='w-1/5'>
                                    <label>Message</label>
                                </div>
                                <div className='w-4/5'>
                                    <textarea name='message' type='text' style={{ height: 200}} onChange={this.handleInputChange} className=' w-4/5  flex rounded bg-orange-100 outline-none p-1' />
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <input type='submit' value='Submit' className='w-20 bg-orange-200 hover:shadow-lg text-white font-bold py-2 px-4 rounded-full m-8' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>


        )
    }
}


export default Contact;