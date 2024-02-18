import React from 'react';
import cls from 'pages/Test/ui/TestPage.module.scss';

const TestPage = () => {
    return (
        <div className={cls.spanTest}>
            <form action='#' method='get'>
                <div>
                    <p>Name</p>
                    <input
                        tabIndex={1}
                        name='name'
                        type='text'
                    />
                </div>
                <div>
                    <p>Password</p>
                    <input
                        tabIndex={2}
                        name='password'
                        type='password'
                    />
                </div>
                <div>
                    <p>Telephone</p>
                    <input
                        tabIndex={3}
                        name='telephone'
                        type='tel'
                    />Lorem <span>ipsum dolor sit amet</span>
                    , consectetur adipisicing elit. Itaque, recusandae!
                </div>
                <div>
                    <p>Gender</p>
                    <div>
                        <input
                            checked
                            tabIndex={4}
                            name='gender'
                            type="radio"
                            value='man'
                        />Man
                    </div>
                    <div>
                        <input
                            tabIndex={4}
                            type="radio"
                            name='gender'
                            value ='woman'
                        />Woman
                    </div>
                </div>
                <div>
                    <p>Property</p>
                    <div>
                        <input
                            tabIndex={5}
                            checked
                            type='checkbox'
                            name='car'
                        />Car
                    </div>
                    <div>
                        <input
                            tabIndex={6}
                            name='bicycle'
                            type='checkbox'
                        />Bicycle
                    </div>
                    <div>
                        <input
                            tabIndex={7}
                            disabled
                            name='home'
                            type='checkbox'
                        />Home
                    </div>
                </div>
                <div>
                    <p>Additional info</p>
                    <textarea
                        tabIndex={8}
                        name='text'
                    ></textarea>
                    <div>
                        <input
                            tabIndex={9}
                            name='foto'
                            type="file"
                        />
                    </div>
                </div>
                <div>
                    <p>Favorite color</p>
                    <select>
                        <option value='red'>red</option>
                        <option value='blue'>blue</option>
                    </select>
                </div>
                <div>
                    <p>Action</p>
                    <button
                        tabIndex={10}
                        type='submit'
                    >Send
                    </button>
                    <button
                        tabIndex={11}
                        type='reset'
                    >Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TestPage;
