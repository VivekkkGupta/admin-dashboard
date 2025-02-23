import React from 'react';
import { useAppContext } from '../../contexts/AppContext';
import BudgetCard from './BudgetCard';

function BudgetStatus() {
    const { dbData } = useAppContext();

    return (
        <div className=" w-full h-auto flex gap-5">
            {dbData.projects.map((project) => (
                <BudgetCard key={project.id} projectdata={project} />
            ))}
        </div>
    );
}

export default BudgetStatus;
