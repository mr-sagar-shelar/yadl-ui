import type { Meta, StoryObj } from "@storybook/react";
import Themeisle63 from "../Themeisle63";

const meta: Meta<typeof Themeisle63> = { title: "Themeisle/Themeisle63", component: Themeisle63 };

export default meta;
type Story = StoryObj<typeof Themeisle63>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
