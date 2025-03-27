# 📚 Studnent Attendance OTP Generation System

## 🌟 Overview
This is a comprehensive Flask-based Attendance Management System with multi-factor authentication, featuring location verification and OTP-based attendance marking.

## ✨ Key Features

### 🔐 Authentication
- Secure user login system
- User authentication using Flask-Login
- Bcrypt password hashing

### 📍 Location Verification
- Geolocation-based attendance validation
- Checks if user is within 50 meters of specified coordinates
- Prevents remote attendance marking

### 🔢 OTP Verification
- One-Time Password (OTP) generation
- Email-based OTP sending
- Time-limited OTP verification

### 📅 Timetable Management
- Dynamic lecture and batch timetable management
- Supports multiple batches and days
- Flexible slot management

## 🛠 Tech Stack
- **Backend**: Flask
- **Database**: SQLAlchemy (SQLite)
- **Authentication**: Flask-Login, Bcrypt
- **Email**: Flask-Mail
- **Geolocation**: GeoPy
- **Frontend**: HTML, JavaScript
- **Additional Libraries**: Pandas, Random

## 🚀 Key Components

### Database Models
- `Authenticate`: User authentication
- `Student`: Student profile management
- `AttendanceRecord`: Attendance tracking
- `TimeTable`: Lecture scheduling

### Core Routes
- `/`: Login page
- `/home`: Dashboard
- `/generate_otp`: OTP generation
- `/verify_otp`: OTP verification
- `/verifyLocation`: Location validation

### Unique Workflow
1. User logs in
2. Verifies location
3. Generates OTP
4. Verifies OTP
5. Marks attendance

## 🔒 Security Features
- Location-based attendance prevention
- OTP-based verification
- Secure email communication
- Session management
- Encrypted credentials

## 📦 Prerequisites
- Python 3.8+
- Flask
- Flask-SQLAlchemy
- Flask-Login
- Flask-Bcrypt
- Flask-Mail
- GeoPy
- Pandas

## 🏗 Installation

### Clone the Repository
```bash
git clone https://github.com/your-username/attendance-otp-system.git
cd attendance-otp-system
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Configure Environment
1. Set up Gmail SMTP credentials
2. Configure database settings
3. Set secret key

### Run the Application
```bash
python app.py
```

## 🔍 Usage Workflow
1. Login with credentials
2. Select batch and lecture
3. Verify location
4. Generate OTP
5. Enter OTP
6. Mark attendance

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch
3. Commit changes
4. Push to the branch
5. Create a Pull Request

## 📄 License
[Specify your license here]

## 🚧 Future Enhancements
- Multi-factor authentication
- Advanced reporting
- Automated attendance analysis
- Mobile app integration

## 📞 Contact
[Your Contact Information]

---

**Note**: Ensure you replace placeholder information like repository URL, license, and contact information with your actual details.
