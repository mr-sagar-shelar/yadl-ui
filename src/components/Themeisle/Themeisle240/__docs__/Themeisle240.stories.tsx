import type { Meta, StoryObj } from "@storybook/react";
import Themeisle240 from "../Themeisle240";

const meta: Meta<typeof Themeisle240> = { title: "Themeisle/Themeisle240", component: Themeisle240 };

export default meta;
type Story = StoryObj<typeof Themeisle240>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
