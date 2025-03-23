import React, { useState, useContext } from 'react';
import { UserContext } from '../user/userProvider';
import DialogWithTextField from '../base/dialogs/dialogWithTextField';
import Table from '../base/tableBase';
import Form from '../formControls/formControlProfile';
import Title from "../base/titleBase.jsx";

export default function AdministrationLayout() {
    const { user } = useContext(UserContext);
    return (
        <>
            <Title title="Администрирование" />
            <Form>
                <DialogWithTextField />
                <Table />
            </Form>
        </>
    );
}