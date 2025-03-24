import type { Meta, StoryObj } from "@storybook/react";
import Themeisle61 from "../Themeisle61";

const meta: Meta<typeof Themeisle61> = { title: "Themeisle/Themeisle61", component: Themeisle61 };

export default meta;
type Story = StoryObj<typeof Themeisle61>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
