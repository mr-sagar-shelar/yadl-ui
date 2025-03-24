import type { Meta, StoryObj } from "@storybook/react";
import Themeisle43 from "../Themeisle43";

const meta: Meta<typeof Themeisle43> = { title: "Themeisle/Themeisle43", component: Themeisle43 };

export default meta;
type Story = StoryObj<typeof Themeisle43>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
