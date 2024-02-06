"use client";

import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import FilterOutlineIcon from "@/public/assets/filter-outline.svg";
import SortIcon from "@/public/assets/sort.svg";

import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";
import { customersData } from "@/app/data/requestQueue";
import Header from "../ui/Header";
import { customersGrid } from "./RequestQueueColumns";

const RequestQueue = () => {
  const selectionSetting = { persistSelection: true };

  return (
    <div>
      <div className="e-card hover:!bg-white">
        <div className="e-card-header">
          <div className="e-card-header-caption">
            <div className="e-card-title flex items-center justify-between">
              <Header
                title="Request Queue"
                description="Please click the graph symbol next to each"
              />

              <div className="flex gap-2">
                <DropDownButtonComponent
                  items={[{ text: "any" }]}
                  className="!flex items-center gap-2 !rounded-md !border-border !bg-white !p-2.5 !px-4 [&>span:nth-child(3)]:hidden"
                >
                  <SortIcon />
                  <span className="font-jakarta text-sm font-medium text-[#333C48]">
                    Sort
                  </span>
                </DropDownButtonComponent>
                <DropDownButtonComponent
                  items={[{ text: "any" }]}
                  className="!flex items-center gap-2 !rounded-md !border-border !bg-white !p-2.5 !px-4 [&>span:nth-child(3)]:hidden"
                >
                  <FilterOutlineIcon />
                  <span className="relative font-jakarta text-sm font-medium text-[#333C48]">
                    Filters
                    <span className="e-badge e-badge-circle ml-2 mt-0.5 !bg-[#e7f2e3] !text-primary">
                      2
                    </span>
                  </span>
                </DropDownButtonComponent>
              </div>
            </div>
          </div>
        </div>
        <div className="e-card-content">
          <GridComponent
            dataSource={customersData}
            enableHover={false}
            allowPaging
            pageSettings={{ pageSize: 12 }}
            selectionSettings={selectionSetting}
            allowSorting
          >
            <ColumnsDirective>
              {customersGrid.map((item, index) => (
                <ColumnDirective key={index} {...item} />
              ))}
            </ColumnsDirective>
            <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
          </GridComponent>
        </div>
      </div>
    </div>
  );
};

export default RequestQueue;
