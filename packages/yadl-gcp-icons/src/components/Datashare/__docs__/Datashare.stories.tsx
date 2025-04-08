import type { Meta, StoryObj } from "@storybook/react";
import Datashare from "../Datashare";

const meta: Meta<typeof Datashare> = { title: "GCP/Datashare", component: Datashare };

export default meta;
type Story = StoryObj<typeof Datashare>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
