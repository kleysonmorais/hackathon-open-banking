import React from 'react';
import Link from 'next/link';

// Icons
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';

export function FormCardItem({ item }) {
  return (
    <div className="p-2">
      <Link
        href="/ver-formulario/[formulario].js"
        as={`/ver-formulario/${item.id}`}
      >
        <div className="flex justify-between items-center border border-gray-200 rounded flex p-4 card w-full cursor-pointer shadow-xl">
          <div className="flex">
            <div
              className="flex flex-col h-16 w-16 p-3 text-white rounded-full items-center justify-center"
              style={{ backgroundColor: '#686868' }}
            >
              <div>{item.trecho}</div>
              <div>trecho</div>
            </div>
            <div className="pl-4">
              <p className="font-medium">#{item.id}</p>
              <div className="flex">
                <div className="flex flex-col">
                  <p className="font-thin text-sm">
                    <MapOutlinedIcon className="mr-3" />
                    Rota {item.rota}
                  </p>
                  <p className="font-thin text-sm">
                    <RoomOutlinedIcon className="mr-3" />
                    {item.br}
                  </p>
                </div>

                <div className="flex flex-col ml-16">
                  <p className="font-thin text-sm">
                    <EventOutlinedIcon className="mr-3" />
                    {item.data}
                  </p>
                  <p className="font-thin text-sm ml-1">
                    <span
                      className="border-black rounded mr-4"
                      style={{ border: 'solid 1px', fontSize: '10px' }}
                    >
                      km
                    </span>
                    {item.km} Km
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex justify-center rounded text-white py-1 px-2"
            style={{
              color: item.color,
              border: '1px solid ' + item.color,
              backgroundColor: item.corStatus,
              width: '95px',
              fontSize: '12px',
            }}
          >
            {item.status}
          </div>
        </div>
      </Link>
    </div>
  );
}
