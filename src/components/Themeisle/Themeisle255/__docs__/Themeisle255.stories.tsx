import type { Meta, StoryObj } from "@storybook/react";
import Themeisle255 from "../Themeisle255";

const meta: Meta<typeof Themeisle255> = { title: "Themeisle/Themeisle255", component: Themeisle255 };

export default meta;
type Story = StoryObj<typeof Themeisle255>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
