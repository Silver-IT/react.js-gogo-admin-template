/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  Row,
  Card,
  CardBody,
  Badge,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import LinesEllipsis from 'react-lines-ellipsis';
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import { NavLink } from 'react-router-dom';
import Breadcrumb from '../../../../containers/navs/Breadcrumb';
import {
  Separator,
  Colxx,
} from '../../../../components/common/CustomBootstrap';
import { blogData } from '../../../../data/blog';

const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

const BlogList = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.blog-list" match={match} />
          <Separator className="mb-5" />
        </Colxx>
        {blogData.map((blogItem, index) => {
          return (
            <Colxx xxs="12" lg="6" className="mb-5" key={`blogItem_${index}`}>
              <Card className="flex-row listing-card-container">
                <div className="w-40 position-relative">
                  <NavLink to="blog-detail">
                    <img
                      className="card-img-left"
                      src={blogItem.thumb}
                      alt="Card cap"
                    />
                    {blogItem.badge && (
                      <Badge
                        color="primary"
                        pill
                        className="position-absolute badge-top-left"
                      >
                        {blogItem.badge}
                      </Badge>
                    )}
                  </NavLink>
                </div>
                <div className="w-60 d-flex align-items-center">
                  <CardBody>
                    <NavLink to="blog-detail">
                      <ResponsiveEllipsis
                        className="mb-3 listing-heading"
                        text={blogItem.title}
                        maxLine="2"
                        trimRight
                        basedOn="words"
                        component="h5"
                      />
                    </NavLink>
                    <ResponsiveEllipsis
                      className="listing-desc text-muted"
                      text={blogItem.description}
                      maxLine="3"
                      trimRight
                      basedOn="words"
                      component="p"
                    />
                  </CardBody>
                </div>
              </Card>
            </Colxx>
          );
        })}
      </Row>
      <Row>
        <Colxx xxs="12">
          <Pagination listClassName="justify-content-center">
            <PaginationItem>
              <PaginationLink className="prev" href="#">
                <i className="simple-icon-arrow-left" />
              </PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink className="next" href="#">
                <i className="simple-icon-arrow-right" />
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </Colxx>
      </Row>
    </>
  );
};

export default BlogList;
