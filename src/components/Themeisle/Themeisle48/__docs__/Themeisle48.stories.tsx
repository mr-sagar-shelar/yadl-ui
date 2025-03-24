import type { Meta, StoryObj } from "@storybook/react";
import Themeisle48 from "../Themeisle48";

const meta: Meta<typeof Themeisle48> = { title: "Themeisle/Themeisle48", component: Themeisle48 };

export default meta;
type Story = StoryObj<typeof Themeisle48>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
