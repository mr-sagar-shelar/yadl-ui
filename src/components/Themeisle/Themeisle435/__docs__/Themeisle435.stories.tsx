import type { Meta, StoryObj } from "@storybook/react";
import Themeisle435 from "../Themeisle435";

const meta: Meta<typeof Themeisle435> = { title: "Themeisle/Themeisle435", component: Themeisle435 };

export default meta;
type Story = StoryObj<typeof Themeisle435>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
