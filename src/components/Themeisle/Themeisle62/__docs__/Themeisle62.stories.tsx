import type { Meta, StoryObj } from "@storybook/react";
import Themeisle62 from "../Themeisle62";

const meta: Meta<typeof Themeisle62> = { title: "Themeisle/Themeisle62", component: Themeisle62 };

export default meta;
type Story = StoryObj<typeof Themeisle62>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
