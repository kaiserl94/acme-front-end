import React from 'react';
import { Navigation } from './Navigation';
import { MyAppointments } from './my-appointments/MyAppointments';

export function Layout() {
    const appointmentData: AppointmentData[] = [
        {
            providerName: "John Doe",
            date: "February 25, 5:30PM",
            reason: "Skin Problem",
            status: AppointmentStatus.JOINABLE,
        },
        {
            providerName: "John Doe",
            date: "March 2, 9:45AM",
            reason: "Allergies",
            status: AppointmentStatus.UPCOMING,
        },
        {
            providerName: "John Doe",
            date: "February 20, 11:00AM",
            reason: "Covid-19",
            status: AppointmentStatus.COMPLETED,
        },
        {
            providerName: "John Doe",
            date: "February 7, 1:15PM",
            reason: "Skin Problem",
            status: AppointmentStatus.CANCELLED,
        }
    ]

    return (
        <div>
            <Navigation />
            <MyAppointments appointmentData={appointmentData} />
        </div>
    );
}

export type AppointmentData = {
    providerName: string;
    date: string;
    reason: string;
    status: AppointmentStatus;
}

export enum AppointmentStatus {
    JOINABLE = "Join Appointment",
    UPCOMING = "Upcoming",
    COMPLETED = "Completed",
    CANCELLED = "Cancelled",
}