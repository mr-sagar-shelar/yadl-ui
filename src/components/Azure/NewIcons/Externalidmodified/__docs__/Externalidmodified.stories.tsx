import type { Meta, StoryObj } from "@storybook/react";
import Externalidmodified from "../Externalidmodified";

const meta: Meta<typeof Externalidmodified> = { title: "Azure/NewIcons/Externalidmodified", component: Externalidmodified };

export default meta;
type Story = StoryObj<typeof Externalidmodified>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
