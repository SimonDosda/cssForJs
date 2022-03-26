import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import { formatPrice, pluralize, isNewShoe } from "../../utils";
import Spacer from "../Spacer";

const VARIANT_COLORS = {
  "on-sale": COLORS.primary,
  "new-release": COLORS.secondary,
};

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'
  const variantColor = VARIANT_COLORS[variant];
  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
        </Row>
        {variantColor ? (
          <Variant style={{ "--color": variantColor }}>
            {variant === "on-sale" ? "Sale" : "Just Released!"}
          </Variant>
        ) : (
          <></>
        )}
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1 1 280px;
  padding: 24px;
`;

const Wrapper = styled.article`
  position: relative;
`;

const Variant = styled.div`
  position: absolute;
  top: 12px;
  right: -4px;
  background-color: var(--color);
  color: white;
  font-weight: 700;
  padding: 7px 9px 9px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 16px 16px 4px 4px;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span``;

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;