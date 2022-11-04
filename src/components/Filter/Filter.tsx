import { FormProps, Icons } from '@pankod/refine-antd';
import { IResourceComponentsProps, useTranslate } from '@pankod/refine-core';
import { useTable } from '@pankod/refine-antd';
import { Button, Card, Col, DatePicker, Input, Row, Select } from 'antd';
import React from 'react'
import { ITerminal } from '../../interfaces';
import { Form } from '@pankod/refine-antd';

export const FilterView: React.FC<IResourceComponentsProps> = () => {
    const { searchFormProps } = useTable<ITerminal>({
        initialSorter: [
            {
                field: "name",
                order: "asc",
            },
        ],
        metaData: {
            fields: [
                "id",
                "name",
                "longitude",
                "latitude",
                "created_at",
            ],
        },
        // onSearch: (params) => {
        //     const filters: CrudFilters = [];
        //             const { q, status, createdAt, gender, isActive } = params;

        //             filters.push({
        //                 field: "q",
        //                 operator: "eq",
        //                 value: q,
        //             });

        //             filters.push(
        //                 {
        //                     field: "createdAt",
        //                     operator: "gte",
        //                     value: createdAt
        //                         ? createdAt[0].startOf("day").toISOString()
        //                         : undefined,
        //                 },
        //                 {
        //                     field: "createdAt",
        //                     operator: "lte",
        //                     value: createdAt
        //                         ? createdAt[1].endOf("day").toISOString()
        //                         : undefined,
        //                 },
        //             );

        //             filters.push({
        //                 field: "gender",
        //                 operator: "eq",
        //                 value: gender,
        //             });

        //             filters.push({
        //                 field: "isActive",
        //                 operator: "eq",
        //                 value: isActive,
        //             });

        //             filters.push({
        //                 field: "status.text",
        //                 operator: "eq",
        //                 value: status,
        //             });

        //             return filters;
        //         },
        //         syncWithLocation: false,
    });

    return (
        <Col xl={6} lg={24} xs={24}>
                        <Card title={"Filters"}>
                    <Filter formProps={searchFormProps}/>
                </Card>
                        </Col>
    )
};


const Filter: React.FC<{ formProps: FormProps }> = (props) => {
    const t = useTranslate();

    const { RangePicker } = DatePicker;

    return (
        <Form layout="vertical" {...props.formProps}>
            <Row align="bottom">
                <Col >
                    <Form.Item label={"Name"} name="name">
                        <Input
                            prefix={<Icons.SearchOutlined />}
                        />
                    </Form.Item>
                </Col>
                <Col >
                    <Form.Item
                        label={"Longitude"}
                        name="longitude"
                    >
                        <Select
                            allowClear
                            options={[
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col >
                    <Form.Item
                        label={"Terminal Number"}
                        name="id"
                    >
                        <Select
                            allowClear
                            options={[
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col >
                    <Form.Item>
                        <Button
                            style={{ width: "100%" }}
                            htmlType="submit"
                            type="primary"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
};

