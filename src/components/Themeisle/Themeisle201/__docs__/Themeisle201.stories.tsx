import type { Meta, StoryObj } from "@storybook/react";
import Themeisle201 from "../Themeisle201";

const meta: Meta<typeof Themeisle201> = { title: "Themeisle/Themeisle201", component: Themeisle201 };

export default meta;
type Story = StoryObj<typeof Themeisle201>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
