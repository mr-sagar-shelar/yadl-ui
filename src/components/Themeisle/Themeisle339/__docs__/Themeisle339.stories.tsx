import type { Meta, StoryObj } from "@storybook/react";
import Themeisle339 from "../Themeisle339";

const meta: Meta<typeof Themeisle339> = { title: "Themeisle/Themeisle339", component: Themeisle339 };

export default meta;
type Story = StoryObj<typeof Themeisle339>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
