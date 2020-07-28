import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import { Colxx } from '../../components/common/CustomBootstrap';
import RadialProgressCard from '../../components/cards/RadialProgressCard';

const SortableStaticticsRow = ({ messages }) => {
  const [state, setState] = useState([
    {
      key: 1,
      title: 'dashboards.payment-status',
      percent: 64,
    },
    {
      key: 2,
      title: 'dashboards.work-progress',
      percent: 75,
    },
    {
      key: 3,
      title: 'dashboards.tasks-completed',
      percent: 32,
    },
    {
      key: 4,
      title: 'dashboards.payments-done',
      percent: 45,
    },
  ]);

  return (
    <ReactSortable
      list={state}
      setList={setState}
      options={{ handle: '.handle' }}
      className="row"
    >
      {state.map((x) => {
        return (
          <Colxx xl="3" lg="6" className="mb-4" key={x.key}>
            <RadialProgressCard
              title={messages[x.title]}
              percent={x.percent}
              isSortable
            />
          </Colxx>
        );
      })}
    </ReactSortable>
  );
};
export default SortableStaticticsRow;
