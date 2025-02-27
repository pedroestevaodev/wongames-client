import Button, { ButtonProps } from "@/components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/hooks/useCart";

type CartButtonProps = {
    id: string
    hasText?: boolean
} & Pick<ButtonProps, 'size'>;

const CartButton = ({
    id,
    size = 'small',
    hasText = false
}: CartButtonProps) => {
    const { isInCart, addToCart, removeFromCart } = useCart();
    const ButtonText = isInCart(id) ? 'Remove from cart' : 'Add to cart';

    return (
        <Button
            icon={isInCart(id) ? <FontAwesomeIcon icon={faCartArrowDown} /> : <FontAwesomeIcon icon={faCartPlus} />}
            size={size}
            onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
            aria-label={ButtonText}
        >
            {hasText && ButtonText}
        </Button>
    );
};

export default CartButton;