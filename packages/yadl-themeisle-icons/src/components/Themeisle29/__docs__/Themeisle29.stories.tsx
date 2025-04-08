import type { Meta, StoryObj } from "@storybook/react";
import Themeisle29 from "../Themeisle29";

const meta: Meta<typeof Themeisle29> = { title: "Themeisle/Themeisle29", component: Themeisle29 };

export default meta;
type Story = StoryObj<typeof Themeisle29>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
