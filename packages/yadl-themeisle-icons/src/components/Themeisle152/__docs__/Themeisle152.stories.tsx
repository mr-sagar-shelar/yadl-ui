import type { Meta, StoryObj } from "@storybook/react";
import Themeisle152 from "../Themeisle152";

const meta: Meta<typeof Themeisle152> = { title: "Themeisle/Themeisle152", component: Themeisle152 };

export default meta;
type Story = StoryObj<typeof Themeisle152>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
