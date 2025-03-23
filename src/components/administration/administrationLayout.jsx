import React, { useState, useContext } from 'react';
import { UserContext } from '../user/userProvider';
import DialogWithTextField from '../dialogs/dialogWithTextField';
import Table from '../base/tableBase';
import Form from '../base/formControlHomeBase';

export default function AdministrationLayout() {
    const { user } = useContext(UserContext);
    return (
        <Form>
            <DialogWithTextField />
            <Table />
        </Form>
    );
}