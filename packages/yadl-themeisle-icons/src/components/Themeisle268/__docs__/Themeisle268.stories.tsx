import type { Meta, StoryObj } from "@storybook/react";
import Themeisle268 from "../Themeisle268";

const meta: Meta<typeof Themeisle268> = { title: "Themeisle/Themeisle268", component: Themeisle268 };

export default meta;
type Story = StoryObj<typeof Themeisle268>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
