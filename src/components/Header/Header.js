import React from 'react';
import styled from 'styled-components/macro';
import {Menu, Search, User} from 'react-feather';

import {QUERIES} from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
	return (
		<header>
			<SuperHeader>
				<Row>
					<ActionGroup>
						<button>
							<Search size={24}/>
						</button>
						<button>
							<Menu size={24}/>
						</button>
					</ActionGroup>
					<ActionGroup>
						<button>
							<User size={24}/>
						</button>
					</ActionGroup>
				</Row>
			</SuperHeader>
			<MainHeader>
				<DesktopActionGroup>
					<ActionGroup>
						<button>
							<Search size={24}/>
						</button>
						<button>
							<Menu size={24}/>
						</button>
					</ActionGroup>
				</DesktopActionGroup>
				<Logo/>
				<SubscribeWrapper>
					<Button>
						Subscribe
					</Button>
					<SubscribeLink>
						Already a subscriber?
					</SubscribeLink>
				</SubscribeWrapper>
			</MainHeader>
		</header>
	);
};

const SuperHeader = styled.div`
    padding: 16px 0;
    background: var(--color-gray-900);
    color: white;

    @media ${QUERIES.laptopAndUp} {
        display: none;
    }
`;

const SubscribeWrapper = styled.div`
    display: none;

    @media ${QUERIES.laptopAndUp} {
		display: revert;
		position: relative;
        justify-self: end;
    }
`

const SubscribeLink = styled.a`
	position: absolute;
	margin-top: 8px;
	width: 100%;
	text-align: center;
    font-style: italic;
    text-decoration: underline;
    font-weight: 400;
`

const Row = styled(MaxWidthWrapper)`
    display: flex;
    justify-content: space-between;
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;

    /*
	  FIX: Remove the inline spacing that comes with
	  react-feather icons.
	*/

    svg {
        display: block;
    }
`;

const DesktopActionGroup = styled(ActionGroup)`
	display: none;
	
	@media ${QUERIES.laptopAndUp} {
		display: flex;
	}
`

const MainHeader = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;

    @media ${QUERIES.laptopAndUp} {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        justify-content: revert;
        justify-items: start;
    }
`;

export default Header;
