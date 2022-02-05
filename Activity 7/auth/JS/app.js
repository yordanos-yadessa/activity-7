function Register() {
  this.fullName = document.getElementById("fullname").value;
  this.phone = document.getElementById("phone").value;
  this.age = document.getElementById("age").value;
  this.color = document.getElementById("color").value;

  

  this.introduceMySelf = () => {
    parent = document.getElementById("render");
    const div = document.createElement("div");
    div.classList.add("appended");
    div.innerHTML = `<h1>New Added Form</h1><h2>Full Name: ${this.fullName}</h2><h2>Age: ${this.age}</h2><h2>PhoneNo: ${this.phone}</h2><h2>color: ${this.color}</h2>`;
    parent.appendChild(div);
  };
}
const callBack = () => {
  const newObject = new Register();
  newObject.introduceMySelf();
};
document.getElementById("submitBtn").addEventListener("click", callBack);
