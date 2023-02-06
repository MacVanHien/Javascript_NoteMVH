
const courses = // 20220720172940
// https://api-gateway.fullstack.edu.vn/api/learning-paths/front-end-development
[
    {
    "id": 1,
    "learning_path_id": 2,
    "title": "1. Tìm hiểu về ngành IT",
    "description": "Để theo ngành IT - Phần mềm cần rèn luyện những kỹ năng nào? Bạn đã có sẵn tố chất phù hợp với ngành chưa? Cùng thăm quan các công ty IT và tìm hiểu về văn hóa, tác phong làm việc của ngành này nhé các bạn.",
    "priority": 1,
    "created_at": null,
    "updated_at": "2022-01-28T22:24:06.000000Z",
    "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/2.png"
    },
    {
    "id": 2,
    "learning_path_id": 2,
    "title": "2. HTML và CSS",
    "description": "Để học web Front-end chúng ta luôn bắt đầu với ngôn ngữ HTML và CSS, đây là 2 ngôn ngữ có mặt trong mọi website trên internet. Trong khóa học này F8 sẽ chia sẻ từ những kiến thức cơ bản nhất. Sau khóa học này bạn sẽ tự làm được 2 giao diện websites là The Band và Shopee.",
    "priority": 1,
    "created_at": null,
    "updated_at": "2022-02-03T01:37:48.000000Z",
    "image_url": "https://files.fullstack.edu.vn/f8-prod/courses/2.png"
    }
]

function Input({label, ...inputProps}) { 
    
    return (
        <div>
            <label>{label}</label>
            <input {...inputProps}/> 
        </div> //...inputProps: tất cả các prop ta thêm vào input sẽ ko cần khai báo tham số
    )
}

function App1() {
    return (
        <div id = "wrapper">
           <Input
                label={"Full name"}
                type="text"
                placeholder="Enter Full name"
                title = "Đây là input"
                onFocus = {function() {console.log(Math.random()*100);}}
            /> 
        </div> //onFocus: mỗi lần nhấp chuột vào là sẽ thực hiện hàm
    ) 
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App1 />);