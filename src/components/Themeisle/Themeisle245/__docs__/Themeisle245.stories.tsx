import type { Meta, StoryObj } from "@storybook/react";
import Themeisle245 from "../Themeisle245";

const meta: Meta<typeof Themeisle245> = { title: "Themeisle/Themeisle245", component: Themeisle245 };

export default meta;
type Story = StoryObj<typeof Themeisle245>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
