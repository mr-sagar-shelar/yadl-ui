import type { Meta, StoryObj } from "@storybook/react";
import Themeisle317 from "../Themeisle317";

const meta: Meta<typeof Themeisle317> = { title: "Themeisle/Themeisle317", component: Themeisle317 };

export default meta;
type Story = StoryObj<typeof Themeisle317>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
