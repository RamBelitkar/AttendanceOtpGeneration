from app import app, db, Authenticate, Student, bcrypt, AttendanceRecord, TimeTable, markedAttendance
import pandas as pd
# Create an application context
with app.app_context():
    try:
        # Create the database and the db table
        db.create_all()

        # Use session.no_autoflush context manager to disable autoflush temporarily
        
        # Use session.no_autoflush context manager to disable autoflush temporarily
        with db.session.no_autoflush:
            
            df = pd.read_excel('student_data.xlsx')
            # Insert user data
            df = pd.read_excel('student_data.xlsx')
            for index, row in df.iterrows():
                authenticate = Authenticate(
                    username=row['roll_no'],
                    password=row['roll_no']
                )
                db.session.add(authenticate)
            
            # commit the changes without autoflush
            db.session.commit()


            # Insert student data
            

    # Iterate through rows and add data to the 'students' table
            for index, row in df.iterrows():
                student = Student(
                    roll_no=row['roll_no'],
                    name=row['name'],
                    email = row['email']
                )
                db.session.add(student)

            df = pd.read_excel('TimeTable.xlsx')

    # Iterate through rows and add data to the 'students' table
            for index, row in df.iterrows():
                tb= TimeTable(
                    batch = row['batch'],
                    day = row['day'],
                    slot1 = row['slot1'],
                    slot2 = row['slot2'],
                    slot3 = row['slot3'],
                    slot4 = row['slot4'],
                    slot5 = row['slot5'],
                    slot6 = row['slot6'],
                    slot7 = row['slot7'],
                    slot8 = row['slot8'],
                )
                db.session.add(tb)

            db.session.commit()

    except Exception as e:
        print(f"Error during database creation: {e}")