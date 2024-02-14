import React from 'react';
import { AppointmentData } from '../Layout';

interface Props {
    appointmentData: AppointmentData[];
}


export function MyAppointments({ appointmentData }: Props) {
    return (
        <>
            <div className="my-appointments">
                <h1>My Appointments</h1>
            </div>
            <div>
                {appointmentData.map((appointment, index) =>
                    <div key={`appointment-${index}`}>
                        {JSON.stringify(appointment)}
                    </div>
                )}
            </div>
        </>
    );
}